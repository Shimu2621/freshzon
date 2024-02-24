import React from "react";

const OrderList = () => {
  return <div>OrderList</div>;
};

export default OrderList;
// // import { useTable } from "react-table";
// import { CompactTable } from '@table-library/react-table-library/compact';
// import productDatas from "../staticData/productDatas";
// import { useMemo } from "react";

// const OrderList = () => {
//   const data = useMemo(() => productDatas, []);
//   const columns = useMemo(() => [
//     {
//       Header: "ID",
//       accessor: "id",
//     },
//     {
//       Header: "Name",
//       accessor: "name",
//     },
//     {
//       Header: "Pre. price",
//       accessor: "prevPrice",
//     },
//     {
//       Header: "CurrentPrice",
//       accessor: "currentPrice",
//     },
//     {
//       Header: "Ratings",
//       accessor: "ratings",
//     },
//     {
//       Header: "Discount",
//       accessor: "discount",
//     },
//     {
//       Header: "Type",
//       accessor: "type",
//     },
//   ]);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div className="container">
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup, index) => (
//             <tr key={index} {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th key={index} {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, index) => {
//             prepareRow(row);
//             return (
//               <tr key={index} {...row.getRowProps()}>
//                 {row.cells.map((cell, index) => {
//                   <td key={index} {...cell.getCellProps()}>
//                     {" "}
//                     {cell.render("Cell")}
//                   </td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderList;
