import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, CircularProgress, useTheme, Link } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";

const Device = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    setSelectedDevice(params.row);
    navigate(`/datadetail/${params.row.id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "comment",
      headerName: "Comment",
      width: 200,
      valueGetter: (params) => params.row.settings.comment,
    },
    {
      field: "ipAddress",
      headerName: "IP Address",
      width: 150,
      valueGetter: (params) => params.row.data.ipAddress,
    },
    { field: "lastUpdated", headerName: "Last Updated", width: 200 },
  ];

  useEffect(() => {
    const loadDevice = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "http://localhost:3000/api/frontend/device"
        );

        setDevices(response.data);
      } catch (error) {
        console.error("Failed to fetch devices", error);
      }

      setLoading(false);
    };

    loadDevice();
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sensor Data" subtitle="Sensor Overview" />
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Box
            m="8px 0 0 0"
            width="100%"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              rows={devices}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              onRowClick={handleRowClick}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Device;
