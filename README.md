# Fire Grid
> A basic grid system using [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Components
- Container
- Row
- Col
    
### Import
 
You can import any component individually:
 
`import Row from './common/grid/Row';`
 
or use multiple imports from the root folder:
 
`import { Row, Col } from './common';`

## Usage
 
```
<Container>
  <Row>
    <Col size={1/3}>
      you code here...
    </Col> 
    <Col size={2/3}>
      you code here too...
    </Col> 
  </Row>
</Container>
```

## Components
   
### Container
> Add a max-width of `1370px` and margin `auto` to center-align it self.

##### Props:

Name | Type | Default Value | Example
---------- | -------- | ------ | ----------
`maxWidth` | `number` | `1370` | `<Container maxWidth={400}/>`

### Row
> Display `flex` and adds a marginX of `-12px` and margin-bottom of `24px`.

##### Props:

Name | Type | Default Value | Example
---------- | -------- | ------ | ----------
`alignItems` | `string` | `stretch` | [check guide for available values](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
`justifyContent` | `string` | `stretch` | [check guide for available values](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Col
> Add a paddingX of `12px`.

##### Props:

Name | Type | Default Value | Example
---------- | -------- | ------ | ----------
`size` | `number` or `object` | `auto (equal divided)` | `size={1}` `size={{ xs: 1, sm: 0.5 }}`

#### Size:
> By default `<Col/>` will be divided equally. Use `size={1}` for a full-width column or any fraction for 
custom sizes. Ex: `size={0.5}` or `size={1 / 2}` for a half size column.

##### Breakpoints:
> There is 5 breakpoint for Col size. You can use by just declaring the breakpoints as an object. 

>Ex: `<Col size={{ md: 1, lg: 0.5 }}/>`

xs | sm |  md | lg | xl 
--- | --- | --- | --- | ---
0 (auto) | 540px | 720px | 960px | 1200px

## Extra
> *It is NOT required to add a `<Container />` to use `<Row/>` & `<Col/>`*

> *It is required to add a `<Row />` to use `<Col/>`*

> *Avoid use numbers larger than `1` to define `<Col/>` sizes. Ex:*

###### Wrong:
```
<Row>
  <Col size={2} />
  <Col size={1} /> 
</Row>
```

###### Right:
```
<Row>
  <Col size={1} />
  <Col size={0.5} /> 
</Row>
```