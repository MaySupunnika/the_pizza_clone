import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { useTranslation } from "react-i18next";

export default function RadioGender() {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel className="text-xs font-medium">{t("gender")}</FormLabel>
      <RadioGroup defaultValue="female" name="radio-buttons-group">
        <div className="flex">
          <Radio
            value="female"
            label={t("female")}
            color="success"
            size="sm"
            className="mr-8 font-medium"
            sx={{
              "&.Mui-checked": {
                color: "#008556",
              },
            }}
          />
          <Radio
            value="male"
            label={t("male")}
            color="success"
            size="sm"
            className="mr-8 font-medium"
            sx={{
              "&.Mui-checked": {
                color: "#008556",
              },
            }}
          />
          <Radio
            value="none"
            label={t("none")}
            color="success"
            size="sm"
            className="font-medium"
            sx={{
              "&.Mui-checked": {
                color: "#008556",
              },
            }}
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
