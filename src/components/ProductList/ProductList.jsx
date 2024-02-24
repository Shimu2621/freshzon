import { useMemo, useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import productDatas from "../../staticData/productDatas";

/**
 * 
 *  {
        id: 1,
        name: "Organic Cauliflower",
        prevPrice: 65.00,
        currentPrice: 50.00,
        ratings: 4,
        discount: "-27%",
        type: "vegetable",
        image: "/images/all-products/veg2.png",
        description: "Cauliflower contains vitamins C and K and only 25 calories, 5 grams of carbohydrates and 2 grams of dietary fiber."
    }, 
 */
const ProductList = () => {
  const data = useMemo(() => productDatas, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "PrevPrice",
      accessorKey: "prevPrice",
    },
    {
      header: "CurrentPrice",
      accessorKey: "currentPrice",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Image",
      accessorKey: "image",
    },
    {
      header: "Nutrition Facts",
      accessorKey: "nutritionFacts",
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    columnResizeMode: "onChange",
  });

  return (
    <div className="product-list-container">
      <h2 className="list-title" style={{ textAlign: "center" }}>
        Product List
      </h2>
      <input
        style={{
          borderRadius: "4px",
          padding: "5px",
          marginBottom: "5px",
          marginTop: "15px",
          cursor: "pointer",
        }}
        size={50}
        type="text"
        placeholder="Search product"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className="product-list">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
          </tr> */}
        </tbody>
      </table>

      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{"8"} row(s)
          selected.
          {table.getFilteredRowModel().rows.length}
        </div>  */}
        <div className="pagination-btn">
          <button onClick={() => table.setPageIndex(0)}>{"<<"}</button>
          <button
            size="sm"
            variant="outline"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous page
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next page
          </button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            {">>"}
          </button>
        </div>
        <div className="page-size d-flex align-items-center">
          <h3>Page size: </h3>
          <select
            style={{
              padding: "2px",
              borderRadius: "5px",
              border: "2px solid #ddd",
              cursor: "pointer",
            }}
            value={table.options.state.pagination.pageSize}
            onChange={(e) => table.setPageSize(e.target.value)}
          >
            {[6, 12, 18].map((pageSize) => {
              return (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

// 1.useReactTable contains what data and columns I'll use in this table.

//** */ 2.UseMemo Hook in react:
//   UseMemo: The useMemo hook is all about memoization. Memoization is a technique where the result of an expensive function or expression is cached so that it's only recomputed when its dependencies change.
//   a.Purpose: useMemo is used to memoize (cache) the result of a function or an expression. This can improve performance by preventing unnecessary calculations.

//   b.Usage: You provide a function and an array of dependencies to useMemo. React executes the function and caches its result. If the dependencies change, the function is re-executed, and the result is updated.

//   c.Typical Use Cases: Memoization is useful for computationally expensive calculations or preventing unnecessary re-renders of components.** */
