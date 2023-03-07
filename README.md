# CARTO React App

This is a demo application to showcase a basic implementation of [CARTO Maps](https://carto.com/) using [deck.gl](https://deck.gl/) and React.

One of the main goals of this exercise is to put into practice clean architecture and domain-driven-design principles and provide a solid foundation on top of which build at scale a component-based solution.

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

To be able to run this application locally and build on top of it you'll need access to CARTO Data Warehouse, so as first thing you should go to their website and [create a an account](https://pinea.app.carto.com/).

Access to data sources is limited and granted per map instance, so you'll need to make sure that whatever resource you want to use here is already added to your map. To do this, follow these steps:

- Go to the [Maps workspace](https://pinea.app.carto.com/maps) and create a new map
- Add data sources you want to use in this project. You can start with
  - `carto-demo-data.demo_tables.airports`
  - `carto-demo-data.demo_tables.retail_stores`
  - `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`
- Add a title to the map and share it publicly
- Write down "Map ID" and "Map token" as you'll need them later

Remember, if you want to display more CARTO sources in your application you'll need add the source to your map first.

### Local development setup

To run this project locally you need to follow these steps:

- Clone this repository
- Change directory into cloned repo
- Install dependencies with `$ yarn`
- Create local env configuration `$  cp .env .env.local`
- Paste your map ID and token in `.env.local`
- Run the application `$ yarn dev`

## Future improvements

There are some things I would like to improve in the future about this application.

### :white_large_square: Add testing coverage

I'd like to cover all state logic and snapshot test components.

### :white_large_square: Add layers dynamically

Currently you're expected to define the a list of layers statically in `src/map/components/Layer/index.tsx`.

I initially wanted to dynamically render layer components as children of `<Deck />` but as reported in [visgl/deck.gl#7304](https://github.com/visgl/deck.gl/issues/7304) that doesn't seem possible.

So one way to handle this is to have `<Deck />` listen for changes to `map.layers` state and pass them to `<DeckGL />`.
