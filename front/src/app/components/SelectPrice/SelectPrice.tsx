"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import styles from "./SelectPrice.module.css";

export default function SelectPrice({ powers }: any) {
  const [value, setValue] = useState<string | null>(powers[0].power);
  const [inputValue, setInputValue] = useState("");
  const selectedPower = powers.find((el: any) => el.power === value);

  return (
    <div className={styles.priceBlockContainer}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={powers.map((el: any) => el.power)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Мощность" />}
      />
      <div className={styles.priceBlock}>
        <span>Стоимость:</span>
        {selectedPower ? (
          <span>{selectedPower.price} ₽</span>
        ) : (
          <span>Выберите мощность</span>
        )}
      </div>
    </div>
  );
}
