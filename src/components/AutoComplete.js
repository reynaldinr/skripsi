import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function Highlights() {
  return (
    <Autocomplete
      id="highlights-demo"
      style={{ width: 300 }}
      options={menus}
      getOptionLabel={option => option.nama}
      renderInput={params => (
        <TextField {...params} label="Cari Produk" variant="outlined" fullWidth margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.nama, inputValue);
        const parts = parse(option.nama, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}

const menus = [
  { nama: 'Ikan Asin'},
  { nama: 'Ayam'},
  { nama: 'Kopi Gayo' },
  { nama: 'Kain Tenun'},
  { nama: 'Kain Ikan'},
  { nama: 'Gantungan Kunci'},
  { nama: 'Ikan Bawal'},
  { nama: 'Ikan Mas'},
  { nama: 'Ikan Sepat'},
  { nama: 'Ikan Arwana'},
  { nama: 'Ikan Cupang'},
];