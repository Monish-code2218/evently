import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Warning from '@mui/icons-material/Warning';

const FailedPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Stack spacing={2}>
        <LinearProgress
          variant="solid"
          color="success"
          value={40}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
          }}
        />
        <Alert
          variant="soft"
          color="danger"
          invertedColors
          startDecorator={
            <CircularProgress size="lg" color="danger">
              <Warning />
            </CircularProgress>
          }
          sx={{ alignItems: 'flex-start', gap: '1rem' }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Lost connection</Typography>
            <Typography level="body-md">
              Please verify your network connection and try again.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button variant="outlined" size="sm">
                Open network settings
              </Button>
              <Button variant="solid" size="sm">
                Try again
              </Button>
            </Box>
          </Box>
        </Alert>
      </Stack>
    </div>
  )
}

export default FailedPage