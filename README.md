# CARTO React App

This is a demo application to showcase a basic implementation of CARTO APIs using Deck.gl and React.

One of the goals of the project is to set a standard and guidelines for future development at scale through clean architecture and domain-driven-design principles.

## Introduction

### Dependencies

This small project depends on the following tech stack:

- TypeScript
- Vite + SWC (through `create-vite`)
- React and Redux (Toolkit + React)
- CARTO Maps API
- Deck.gl framework

### Features provided

We'll handle primarily two features

- Render a map
- Support data visualization layers

## Contributing

### Requirements

To be able to run this application locally and build on top of it you'll need access to CARTO Data Warehouse.

So as first thing, you should go to their website and [create a an account](https://pinea.app.carto.com/).

Access to data sources is limited and granted per map instance, so you'll need to make sure that whatever resource you want to use here is already added to your map. To do this, follow these steps:

- Go to the [Maps workspace](https://pinea.app.carto.com/maps) and create a new map
- Add data sources you want to use in this project. You can start with
  - `carto-demo-data.demo_tables.airports`
  - `carto-demo-data.demo_tables.retail_stores`
  - `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`
- Add a title to the map and share it publicly
- Copy "Map ID" and "Map token" to your `.env.local`

If you want to display more CARTO sources in your application, just remember to first add the source to your map as well.

### Local development setup

To run this project locally you need to follow these steps:

- Clone this repository
- Change directory into cloned repo
- Install dependencies with `$ yarn`
- Create local env configuration `$  cp .env .env.local`
- Add your CARTO token
- Run the application `$ yarn dev`
