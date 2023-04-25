import { Accordion, Button, CloseButton, createStyles, Divider, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
import plus from '../../../assets/plus.png';
import React from 'react';


const useStyle = createStyles((theme) => ({
  accordionContainer: {
    width: "80%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "95%"
    },
  },
  sourceInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sourceInput: {
    width: "80%",
  },
  sourceInputBtn: {
    width: "18%",
  },
  sourcesDataContainer: {
    paddingTop: "3%",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 20px"
  }
}));

export function DashboardAccordion({sourcesTypes, sourcesInfoData}) {
  const { classes, theme } = useStyle()
  const [ source, setSource ] = useState()
  const [sourcesInfo, setSourceInfo ] = useState(sourcesInfoData)

  const addDataSources = (classes) => {
    return sourcesTypes.map((e, i) => {
      return (
        <Accordion.Item value={e.label} key={i}>
          <Accordion.Control icon={<img src={e.img} width={50}/>}>{e.label}</Accordion.Control>
          <Accordion.Panel>
            <div className={classes.sourceInputContainer}>
              <TextInput placeholder="Enter here..." className={classes.sourceInput} onChange={(val) => setSource(val.target.value)} />
              <Button className={classes.sourceInputBtn} onClick={addSources}>Add</Button>
            </div>
            <div className={classes.sourcesDataContainer}>
              {displaySources(classes)}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      );
    })
  }
  
  const addSources = () => {
    console.log(`from add source: ${source}`)
  }
  
  const displaySources = (classes) => {
    return sourcesInfo.map((e, i) => {
      return (
        <div key={i}>
          <div className={classes.infoContainer}>
            <Text c="dimmed">{e.text}</Text>
            <CloseButton aria-label="Close modal" size={18} />
          </div>
          <Divider my="sm" />
        </div>
      );
    });
  }

  return (
    <Accordion 
      defaultValue="Facebook Ads" 
      className={classes.accordionContainer}
      variant="filled"
      chevronPosition="right"
      chevron={<img src={plus} width={15} />}
      // styles={{
      //   item: {
      //     border: 0,
      //   },
      // }}
    >
      {addDataSources(classes)}
    </Accordion>
  );
}