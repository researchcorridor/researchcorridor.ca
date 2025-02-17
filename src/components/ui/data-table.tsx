'use client';

import {
  Button,
  cn,
  Input,
  Pagination,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { PiPlus } from 'react-icons/pi';
import { SlDrawer } from 'react-icons/sl';

type ColumnType = {
  title: string;
  key: string;
  icon?: React.ElementType;
  align?: 'left' | 'center' | 'right';
  className?: string;
  RowClassName?: string;
  allowsSorting?: boolean;
  SkeletonComponent?: React.ReactNode;
  component?: (
    data: any,
    rowData: Record<string, any>,
    index: number,
  ) => React.ReactNode;
};

type PaginationType = {
  totalPage: number;
  totalItems: number;
  onThisPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

type DataTableProps = {
  headerChildren?: React.ReactNode;
  afterContent?: React.ReactNode;
  beforeContent?: React.ReactNode;
  title?: string;
  Icon?: React.ElementType;
  isLoading?: boolean;
  columns: ColumnType[];
  rows: Record<string, any>[];
  rowClassName?: string;
  className?: string;
  addButtonText?: string;
  addButtonLink?: string;
  pagination?: PaginationType;
  onSearch?: (value: string) => void;
};

const DataTable = ({
  headerChildren,
  columns,
  rows,
  rowClassName,
  title,
  Icon,
  isLoading,
  className,
  afterContent,
  beforeContent,
  addButtonText,
  addButtonLink,
  pagination,
  onSearch,
}: DataTableProps) => {
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const onSearching = (value: string) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (onSearch) {
        onSearch(value);
      }
    }, 1500);
  };

  return (
    <>
      <div className="relative flex items-center justify-between p-4">
        <h3 className="text-primary flex items-center gap-2 text-3xl">
          {Icon && <Icon />}
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {headerChildren && headerChildren}
          {addButtonText && (
            <Button
              as={Link}
              href={addButtonLink}
              variant="solid"
              color="primary"
            >
              <PiPlus />
              {addButtonText}
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 p-4">
        {onSearch && (
          <Input
            className="max-w-[250px]"
            isClearable
            placeholder="Search..."
            startContent={<CiSearch />}
            size="md"
            onClear={() => onSearching('')}
            onChange={(e) => onSearching(e.target.value)}
          />
        )}
        {beforeContent ? beforeContent : <div />}
      </div>
      <Table
        bottomContent={afterContent}
        isHeaderSticky
        aria-label={title}
        className={className}
        shadow="none"
        classNames={{
          th: 'text-base text-foreground-700 bg-background',
          tr: '!shadow-none',
          wrapper: 'p-1 pt-0 max-h-[calc(100vh-285px)]',
          base: 'pl-3',
        }}
      >
        <TableHeader>
          {columns.map((column, index) => (
            <TableColumn
              className={column.className}
              key={index}
              allowsSorting={column.allowsSorting}
              align={
                column.align === 'center'
                  ? 'center'
                  : column.align === 'right'
                    ? 'end'
                    : 'start'
              }
            >
              <div
                className={cn(
                  'flex items-center gap-1 font-medium',
                  column.align === 'center' && 'justify-center',
                  column.align === 'right' && 'justify-end',
                )}
              >
                {column.icon && <column.icon />}
                {column.title}
              </div>
            </TableColumn>
          ))}
        </TableHeader>
        {!isLoading ? (
          <TableBody>
            {rows.map((item, i) => (
              <TableRow
                key={i}
                className={cn(
                  'hover:bg-background cursor-pointer rounded-xl',
                  rowClassName,
                )}
              >
                {columns.map((column, j) => (
                  <TableCell
                    key={`${i}-${j}`}
                    className={cn(column.RowClassName)}
                  >
                    {column.component ? (
                      column.component(item[column.key], item, j)
                    ) : (
                      <p className="line-clamp-2">{item[column.key]}</p>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <TableRow key={i}>
                {columns.map((column, j) => (
                  <TableCell key={`${i}-${j}`}>
                    {column.SkeletonComponent ? (
                      column.SkeletonComponent
                    ) : (
                      <Skeleton className="h-10 w-full rounded-lg opacity-20" />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {rows.length === 0 && !isLoading ? (
        <div className="text-foreground-200 flex flex-col items-center justify-center p-4">
          <SlDrawer className="text-6xl" />
          <p>No data available</p>
        </div>
      ) : null}
      {pagination && (
        <div className="absolute bottom-1 left-0 flex w-full items-center justify-between bg-white px-4 py-2">
          {!isLoading ? (
            <p className="text-default-500">
              {pagination.totalItems > 0 ? (
                <>
                  {10 * (pagination.currentPage - 1) + 1} -{' '}
                  {10 * (pagination.currentPage - 1) + pagination.onThisPage}{' '}
                  out of{' '}
                </>
              ) : null}
              {pagination.totalItems} items
            </p>
          ) : (
            <Skeleton className="h-7 min-w-72 rounded-sm opacity-20" />
          )}
          <Pagination
            onChange={(page) => pagination.onPageChange(page)}
            page={pagination.currentPage || 1}
            total={pagination.totalPage}
            showControls
          />
        </div>
      )}
    </>
  );
};

export default DataTable;
