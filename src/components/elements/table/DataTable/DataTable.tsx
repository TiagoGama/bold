import * as React from 'react'

import { SortDirection } from '../SortableLabel/SortableLabel'
import { Table, TableHead, TableHeader, TableHeaderProps, TableProps, TableRow } from '../Table'

import { TableFilledBody } from './TableFilledBody'

export interface SortMap { [key: string]: SortDirection }

export interface TableColumnConfig<T = any> {
    name: string
    header?: React.ReactNode
    sortable?: boolean
    styles?: any
    render(row: T): React.ReactNode
}

export interface DataTableProps<T = any> extends TableProps {
    rows: T[]
    columns: Array<TableColumnConfig<T>>
    loading?: boolean
    sort?: SortMap
    onSortChange?(sort: SortMap): void
    render?(renderProps: DataTableRenderProps): React.ReactNode
}

export interface DataTableRenderProps extends DataTableProps {
    getHeaderProps(column: TableColumnConfig): TableHeaderProps
}

export class DataTable<T = any> extends React.PureComponent<DataTableProps<T>> {
    static defaultProps: Partial<DataTableProps<any>> = {
        loading: false,
        sort: {},
        onSortChange: () => null,
        render: (renderProps: DataTableRenderProps) => <DataTableDefault {...renderProps} />,
    }

    render() {
        return this.props.render({
            ...this.props,
            getHeaderProps: this.getHeaderProps,
        })
    }

    private getHeaderProps = (col: TableColumnConfig) => ({
        key: col.name,
        'data-name': col.name,
        sortable: col.sortable,
        sortDirection: this.props.sort[col.name],
        onSortChange: this.handleSortChange(col),
    })

    private handleSortChange = (col: TableColumnConfig) => (sortDirection: SortDirection, shiftKey: boolean) => {
        if (shiftKey) {
            this.props.onSortChange({ ...this.props.sort, [col.name]: sortDirection })
        } else {
            this.props.onSortChange({ [col.name]: sortDirection })
        }
    }
}

export class DataTableDefault extends React.PureComponent<DataTableRenderProps> {
    render() {
        const {
            columns,
            rows,
            loading,
            onSortChange,
            sort,
            getHeaderProps,
            render,
            ...rest,
        } = this.props

        return (
            <Table {...rest}>
                <TableHead>
                    <TableRow>
                        {columns.map(col => (
                            <TableHeader {...getHeaderProps(col)}>
                                {col.header}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableFilledBody rows={rows} columns={columns} loading={loading} />
            </Table>
        )
    }
}
