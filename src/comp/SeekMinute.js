import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Box, createTheme, IconButton, ThemeProvider, useTheme } from '@mui/material'

function SeekMinute ({ goTime, period = 1, setFullMode, fullMode, halfTimeEnd }) {
  const theme = useTheme()
  return (
    <Box>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            background: { paper: 'rgb(28,27,27)' },
          },
        })}
      >
        {
          (period === 2 && halfTimeEnd) &&
          <Box mt={1} position="absolute" right={95}>
            <IconButton size="small" onClick={() => setFullMode(!fullMode)}
                        tabIndex={-1}>{fullMode ? '🕐' : '🕘'}</IconButton>
          </Box>
        }
        <Box display="flex">
          <Box display="flex" m={1} border="1px solid #2A2929" p={1} pt={0.5} pb={0.5}>
            <List dense
                  sx={{ padding: 0 }}
            >
              {
                Array.from({ length: 28 }).map((item, index) => {
                  return (<ListItem
                    key={index}
                    disablePadding
                    onClick={() => goTime({ minute: index + 1, period })}
                  >
                    <ListItemButton style={{ textAlign: 'center', padding: 0, marginRight: -8, width: 15 }}
                                    sx={{ color: theme.palette.primary.main }}>
                      <ListItemText primary={index + 1 + (fullMode ? 45 : 0)} sx={{ margin: 0, fontSize: 12 }}
                                    disableTypography/>
                    </ListItemButton>
                  </ListItem>)
                })}
            </List>&nbsp;&nbsp;
          </Box>
          <Box display="flex" m={1} border="1px solid #2A2929" p={1} pt={0.5} pb={0.5}>
            <List dense
                  sx={{ padding: 0 }}
            >
              {
                Array.from({ length: 28 }).map((item, index_) => {
                  const index = index_ + 28
                  return (<ListItem
                    key={index}
                    disablePadding
                    onClick={() => goTime({ minute: index + 1, period })}
                  >
                    <ListItemButton style={{ textAlign: 'center', padding: 0, marginRight: -8, width: 15 }}
                                    sx={{ color: theme.palette.primary.main }}>
                      <ListItemText primary={index + 1 + (fullMode ? 45 : 0)} sx={{ margin: 0, fontSize: 12 }}
                                    disableTypography/>
                    </ListItemButton>
                  </ListItem>)
                })}
            </List>&nbsp;&nbsp;
          </Box>
        </Box>
      
      </ThemeProvider>
    </Box>
  )
}

export default SeekMinute
