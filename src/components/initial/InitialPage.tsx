'use client';

import { useGameContext } from '@/contexts/GameContext';
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { useMemo, useState } from 'react';

export default function InitialPage() {
  const { customizeField, numberCellsOnField, changeNumberCellsOnField, isCustomizeField } = useGameContext();

  function CustomFiledInput() {
    if (customizeField) {
      return (
        <TextField
          label="Number"
          type="number"
          defaultValue={numberCellsOnField}
          InputProps={{ inputProps: { min: 3} }}
          onBlur={(ev) => changeNumberCellsOnField(+ev.target.value)}
        />
      );
    }
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Typography variant="h2" component="h2" m="20px 0 40px">
        Tic-Tac-Toe Game
      </Typography>
      <Box display="flex" alignItems="center" sx={{
        mb: "20px"
      }}>
        <Button
          variant="contained"
          component={NextLink}
          href="/game"
          sx={{
            mr: '40px',
          }}
          onClick={() => {
            if(!customizeField) {
              changeNumberCellsOnField(3)
            }
          }}
        >
          Start Game
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={customizeField}
              onChange={() => isCustomizeField()}
            />
          }
          label="Custom filed"
        />
      </Box>

      <CustomFiledInput></CustomFiledInput>
    </Box>
  );
}
