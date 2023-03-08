import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  TextField,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  useTheme,
  Alert,
  AlertTitle,
  useMediaQuery,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

import Header from "../../components/Header";

function DeviceDetail() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [device, setDevice] = useState(null);
  const [comment, setComment] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetch(`http://localhost:3000/api/frontend/device/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDevice(json);
        setComment(json.settings.comment || "");
      });
  }, [id]);

  const handleSaveComment = () => {
    const updatedDevice = { ...device };
    updatedDevice.settings.comment = comment;
    fetch(`http://localhost:3000/api/frontend/device/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDevice),
    })
      .then((response) => response.json())
      .then((json) => {
        setDevice(json);
        setComment(json.settings.comment || "");
        setIsTyping(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setIsTyping(true);
  };

  if (!device) {
    return (
      <Box m="20px">
        <CircularProgress
          sx={{
            color: colors.greenAccent[500],
          }}
        />
      </Box>
    );
  }

  return (
    <Box m="30px">
      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="Device" subtitle={device.id} />

        <Box>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Back
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item={true} xs={12} md={12}>
          <Box
            backgroundColor={colors.primary[400]}
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5">Details</Typography>
            <List>
              <ListItem
                key={device?.id}
                sx={{
                  margin: "10px 0",
                  borderRadius: "2px",
                  padding: "15px",
                }}
              >
                <Typography p="15px" variant="h5">
                  ID: {device.id}
                </Typography>
                <Typography p="15px" variant="h5">
                  Type: {device.type}
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  onChange={handleCommentChange}
                  value={comment}
                  label="Comment"
                  multiline
                  rows={2}
                  padding="15px"
                />
                <Typography p="15px" variant="h5">
                  Data: {JSON.stringify(device.data.ipAddress)}
                </Typography>
                <Typography p="15px" variant="h5">
                  Last Updated: {device.lastUpdated}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveComment}
                  disabled={!isTyping}
                  sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                  }}
                >
                  Save Comment
                </Button>
                {isSuccess && (
                  <Alert
                    severity="success"
                    onClose={() => setIsSuccess(false)}
                    sx={{
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                    }}
                  >
                    <AlertTitle>Success</AlertTitle>
                    Comment saved successfully!
                  </Alert>
                )}
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DeviceDetail;
