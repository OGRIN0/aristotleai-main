// "use strict";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import { AgGridReact } from "ag-grid-react";
// import React, { useMemo, useState, useContext, useEffect } from "react";
// import useTheme from "../../context";
// import data from "./csvjson.json";
// import "./table.css";

// const App = () => {
//   const { theme, darkTheme, lightTheme, violetTheme } = useTheme();
//   const [color, setColor] = useState("ag-theme-quartz");
//   const [rowData, setRowData] = useState(data);

//   const [columnDefs, setColumnDefs] = useState([
//     {
//       field: "Sl No",
//       filter: "agNumberColumnFilter",
//       checkboxSelection: true,
//     },
//     { field: "Company Name" },
//     {
//       headerName: "Website",
//       field: "Website",
//       cellRenderer: (params) => {
//         const url = `https://${params.value}`;
//         return (
//           <a href={url} target="_blank" style={{ color: "blue" }}>
//             {params.value}
//           </a>
//         );
//       },
//     },
//     { field: "Twitter_url" },
//     { field: "Linkedin_url" },
//     { field: "Crunchbase_url" },
//     { field: "City" },
//     { field: "EMAIL" },
//   ]);

//   const defaultColDef = useMemo(() => {
//     return {
//       filter: "agTextColumnFilter",
//       floatingFilter: true,
//     };
//   }, []);

//   useEffect(() => {
//     // Use a useEffect to handle theme changes and update color accordingly
//     if (theme === "light") {
//       setColor("ag-theme-quartz");
//     } else if (theme === "dark") {
//       setColor("ag-theme-quartz-dark");
//     } else if (theme === "violet") {
//       setColor("ag-theme-quartz vio");
//     } else if (theme == "cyan") setColor("ag-theme-quartz cya");
//     else if (theme == "blue") setColor("ag-theme-quartz blu");
//     else if (theme == "lime") setColor("ag-theme-quartz lim");
//   }, [theme]); // Run this effect whenever the theme changes

//   return (
//     <div
//       className={color + " mt-7 mb-6 "}
//       style={{ height: 600, fontFamily: "sans-serif" }}
//     >
//       <AgGridReact
//         rowData={rowData}
//         columnDefs={columnDefs}
//         defaultColDef={defaultColDef}
//         rowSelection="multiple"
//         suppressRowClickSelection={true}
//         pagination={true}
//         paginationPageSize={500}
//         paginationPageSizeSelector={[200, 500, 1000]}
//       />
//     </div>
//   );
// };
// export default App;

import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Link,
  TablePagination,
  TableSortLabel,
  Container,
  Typography,
} from "@mui/material";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";
import data from "./csvjson.json";
import "./table.css";

const App = () => {
  const { theme } = useUITheme();
  const [rowData, setRowData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("Sl No");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rowData.map((n) => n["Sl No"]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  useEffect(() => {
    setRowData(data);
  }, []);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRowData = useMemo(() => {
    return rowData.sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });
  }, [order, orderBy, rowData]);

  console.log(rowData, "ROW DATA");

  return (
    <Container maxWidth sx={{ maxHeight: "100vh" }}>
      <TableContainer
        component={Paper}
        sx={{
          p: 3,
          bgcolor: "transparent",
          mt: 2,
          height: 450,
          // maxHeight: 450,
          overflow: "auto",
          boxDecorationBreak: "slice",
          boxShadow: "none",
          "&::-webkit-scrollbar": {
            width: "10px",
            height: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background:
              theme === ENUM.LIGHT
                ? "var(--color-light-bg)"
                : "var(--color-dark-bg)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "var(--color-accent-lighter3)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "var(--color-accent-dark)",
          },
        }}
      >
        <Table stickyHeader>
          <TableHead sx={{ p: 1, border: "1px solid red" }}>
            <TableRow
              sx={{
                border: "1px solid red",
                color: `${
                  theme === ENUM.LIGHT
                    ? "var(--color-dark-bg)"
                    : "var(--color-light-bg)"
                }`,
              }}
            >
              <TableCell
                padding="checkbox"
                sx={{
                  bgcolor: `${
                    theme === ENUM.LIGHT
                      ? "var(--color-light-bg)"
                      : "var(--color-dark-bg)"
                  }`,
                  borderBottom: "1px solid var(--color-accent-lighter2)",
                  borderTop: "1px solid var(--color-accent-lighter2)",
                  borderLeft: "1px solid var(--color-accent-lighter2)",
                  borderTopLeftRadius: 35,
                  borderBottomLeftRadius: 35,
                }}
              >
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < rowData.length
                  }
                  checked={
                    rowData.length > 0 && selected.length === rowData.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all" }}
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-accent)",
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color: "var(--color-accent-lighter2)",
                    },
                    color: "var(--color-accent-lighter2)",
                    bgcolor: `${
                      theme === ENUM.LIGHT
                        ? "var(--color-light-bg)"
                        : "var(--color-dark-bg)"
                    }`,
                  }}
                />
              </TableCell>
              {[
                {
                  id: "Sl No",
                  label: "Sl No",
                  width: 100,
                  css: {
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                    borderTop: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "Company Name",
                  label: "Company Name",
                  width: 200,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "Website",
                  label: "Website",
                  width: 150,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "Twitter_url",
                  label: "Twitter URL",
                  width: 170,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "Linkedin_url",
                  label: "LinkedIn URL",
                  width: 170,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "Crunchbase_url",
                  label: "Crunchbase URL",
                  width: 220,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "City",
                  label: "City",
                  width: 170,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                  },
                },
                {
                  id: "EMAIL",
                  label: "Email",
                  width: 170,
                  css: {
                    borderTop: "1px solid var(--color-accent-lighter2)",
                    borderBottom: "1px solid var(--color-accent-lighter2)",
                    borderRight: "1px solid var(--color-accent-lighter2)",
                    borderTopRightRadius: 35,
                    borderBottomRightRadius: 35,
                  },
                },
              ].map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    width: column.width,
                    fontSize: 12,
                    bgcolor: `${
                      theme === ENUM.LIGHT
                        ? "var(--color-light-bg)"
                        : "var(--color-dark-bg)"
                    }`,
                    p: 1,
                    ...column.css,
                    "&.MuiTableSortLabel-icon": {
                      color: `${
                        theme === ENUM.LIGHT
                          ? "var(--color-dark-bg)"
                          : "var(--color-light-bg)"
                      }`,
                    },
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, column.id)}
                    sx={{}}
                  >
                    <Typography
                      fontSize={12}
                      sx={{
                        fontFamily: "var(--fontFamily)",
                        color: `${
                          theme === ENUM.DARK
                            ? "var(--color-light-bg)"
                            : "var(--color-dark-bg)"
                        }`,
                      }}
                      variant="body1"
                    >
                      {column.label}
                    </Typography>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&":{
              p:"0px !important",
              m:"0px !important"
          } }}>
            {sortedRowData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row["Sl No"]);
                return (
                  <TableRow
                    key={row["Sl No"]}
                    hover
                    onClick={(event) => handleClick(event, row["Sl No"])}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                    sx={{
                      p: "0px !important",
                      m: "0px !important",
                      "&.Mui-selected": {
                        bgcolor: "transparent",
                        color: `${
                          theme === ENUM.DARK
                            ? "var(--color-dark-bg)"
                            : "var(--color-light-bg)"
                        } !important`,
                        "&:hover": {
                          bgcolor: "var(--color-accent-lighter) !important",
                        },
                      },
                      color: `${
                        theme === ENUM.LIGHT
                          ? "var(--color-dark-bg)"
                          : "var(--color-light-bg)"
                      }`,
                      "&:hover": {
                        bgcolor: "var(--color-accent-lighter) !important",
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        sx={{
                          "&.Mui-checked": {
                            color: "var(--color-accent)",
                          },
                          color: "var(--color-accent-lighter2)",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT
                            ? "var(--color-dark-bg)"
                            : "var(--color-light-bg)"
                        }`,
                      }}
                    >
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["Sl No"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT
                            ? "var(--color-dark-bg)"
                            : "var(--color-light-bg)"
                        }`,
                      }}
                    >
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["Company Name"]}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`https://${row["Website"]}`}
                        sx={{
                          color: "var(--color-accent)",
                          textDecoration: "none",
                          "&:hover": { color: "var(--color-accent)" },
                        }}
                        target="_blank"
                      >
                        <Typography
                          sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                          variant="body2"
                        >
                          {row["Website"]}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT ? "var(--color-dark-bg)" : "#ccc"
                        }`,
                      }}
                    >  
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14, m:0 }}
                        variant="body2"
                      >
                        {row["Twitter_url"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT ? "var(--color-dark-bg)" : "#ccc"
                        }`,
                      }}
                    >
                      {" "}
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["Linkedin_url"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT ? "var(--color-dark-bg)" : "#ccc"
                        }`,
                      }}
                    >
                      {" "}
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["Crunchbase_url"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT ? "var(--color-dark-bg)" : "#ccc"
                        }`,
                      }}
                    >
                      {" "}
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["City"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: `${
                          theme === ENUM.LIGHT ? "var(--color-dark-bg)" : "#ccc"
                        }`,
                      }}
                    >
                      {" "}
                      <Typography
                        sx={{ fontFamily: "var(--fontFamily)", fontSize: 14 }}
                        variant="body2"
                      >
                        {row["EMAIL"]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          display: "flex !important",
          justifyContent: "space-between !important",
          alignItems: "center",
          px: 2,
          fontFamily: "var(--fontFamily)",
          "&": {
            display: "flex !important",
            justifyContent: "flex-end !important",
            px: "12px !important",
            alignItems: "center !important",
            ".Mui-disabled": {
              color: "#ccc !important",
            },
            ".MuiTablePagination-toolbar": {
              display: "flex !important",
              alignItems: "center !important",
              ".MuiTablePagination-selectLabel": {
                color: `${
                  theme === ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)"
                } !important`,
                fontFamily: "var(--fontFamily) !important",
                p: 0,
                m: 0,
              },
              ".MuiTablePagination-input": {
                color: `${
                  theme === ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)"
                } !important`,
                fontFamily: "var(--fontFamily) !important",
                p: 0,
                ".MuiTablePagination-selectIcon": {
                  color: `${
                    theme === ENUM.DARK
                      ? "var(--color-light-bg)"
                      : "var(--color-dark-bg)"
                  } !important`,
                },
              },
              ".MuiTablePagination-displayedRows": {
                color: `${
                  theme === ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)"
                } !important`,
                fontFamily: "var(--fontFamily) !important",
                m: 0,
              },
            },
            ".MuiTablePagination-actions": {
              button: {
                color: `${
                  theme == ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)"
                }`,
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default App;
