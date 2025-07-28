import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

function AudioInput({ isRecording, setAudioUrl, setSnackbarMessage, setOpenSnackbar }) {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrlState] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  const startRecording = async () => {
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrlState(url);
        setAudioUrl(url);  // Pass the audio URL back to the parent (HomePage)
        setSnackbarMessage("Recording completed successfully!");
        setOpenSnackbar(true);
      };

      setMediaRecorder(recorder);
      recorder.start();
    } catch (err) {
      console.error("Error accessing microphone: ", err);
      setSnackbarMessage("Failed to start recording.");
      setOpenSnackbar(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setLoading(false);
    }
  };

  return (
    <Box>
      {loading && <CircularProgress />}
      {/* {audioUrl && <audio controls src={audioUrl} />} */}
    </Box>
  );
}

export default AudioInput;
