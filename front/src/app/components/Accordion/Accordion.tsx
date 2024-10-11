import { useRef, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Accordion.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface AccordionItem {
  id: number;
  Title: string;
  information: string;
}

interface AccordionProps {
  accordionItems: AccordionItem[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 3 }}>{children}</Box>}
    </div>
  );
}

const Accordion: React.FC<AccordionProps> = ({ accordionItems }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {accordionItems.map((item, index) => (
            <Tab
              key={index}
              className={styles.accordionButton}
              label={item.Title}
            />
          ))}
        </Tabs>
      </Box>

      {accordionItems.map((item, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <div
            dangerouslySetInnerHTML={{
              __html: item.information,
            }}
          />
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default Accordion;
