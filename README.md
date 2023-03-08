
[![npm version](https://badge.fury.io/js/react-with-tabs.svg)](https://badge.fury.io/js/react-with-tabs)

# React with tabs
React with tabs is a simple and highly customizable HOC (High order components) that allows you to create tabs in seconds, the package also provides custom-built tabs components (which internally use the same HOC).

The idea of creating this package came up to me while developing [nextjs-developer](https://github.com/ZakariaBenali/nextjs-portfolio) open source portfolio, I needed to create a simple tab component for my *Experience Section*, The goal was to add animation on each tab panel, Most external react tabs packages come with built-in style and components and can be challenging to optimize.
[See Demo](http://react-with-tabs-demo.zakariabenali.me/)

## Key Features

 1. Very simple to use
 2. Highly customizable 
 3. No predefined styles (You can use it with both vertical and horizontal tabs)
 4. Built-in classNames + Support for custom classNames
 5. Typescript support 
 
## Installation
 1. Install the package:
	 ```sh
    npm i react-with-tabs
	   ```
	   or 
	```sh
    yarn add react-with-tabs
	   ```
	   or
	 ```sh
    pnpm add react-with-tabs
	   ```
 
 ## Basic Usage:
Using built-in tabs component:
```js
import { Tab, TabList, TabPanel, Tabs } from  "react-with-tabs";

const DefaultTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanel>Tab content 1</TabPanel>
      <TabPanel>Tab content 2</TabPanel>
    </Tabs>
  );
};
export { DefaultTabs };
```

Using built-in HOC for custom tab component:

```js
import { TabElements } from  'react-with-tabs';
import { CustomTabsComponent } from  './CustomTabsComponent';

const  Component = ({ children}) => {
  return (
    <div className="custom-tabs">
      {children}
    </div>
  );
};
const  CustomTabsComponent = withTabs(Component);

export const CustomTabs = () => {
  return (
    <CustomTabsComponent>
      <div className="custom-tab-list" role={TabElements.tabList}>
        <button className="custom-tab" role={TabElements.tab}>Tab 1</button>
        <button className="custom-tab" role={TabElements.tab}>Tab 2</button>	
      </div>
      <div className="custom-tab-panel" role={TabElements.tabPanel}>
        Tab Content 1
      </div>
      <div className="custom-tab-panel" role={TabElements.tabPanel}>
        Tab Content 2
      </div>
    </CustomTabsComponent>
  );
};
```

## API
The main element in React with tabs is the HOC with tabs which creates tabs, But there are also built-in components (which use the same HOC internally) 

### Tabs (div)
---
All props for a normal div are accepted in addition to:


**selectedClassName: string | undefined**

This is the className for the selected tab 
> default: _react_Selected_Tab

**className: string  | undefined**:
> default: _react_Tabs

### TabList (div)
---
All props for a normal div are accepted in addition to: 



**className: string  | undefined**:
> default: _react_Tab_List

**role: string | undefined**:
> default: tabs

🟥 **Important**: Do not change the role since it will affect the tabs

### Tab (button)
---
All props for a normal button are accepted in addition to:



**className: string  | undefined**:
> default: _react_Tab

**role: string | undefined**:
> default: tab

🟥 **Important**: Do not change the role since it will affect the tabs.

### TabPanel (div)
All props for a normal div are accepted in addition to:


**className: string  | undefined**:
> default: _react_Tab_Panel

**role: string | undefined**:
> default: tab-panel

🟥 **Important**: Do not change the role since it will affect the tabs.


### withTabs (HOC)
---
A high order component that takes an element (this element need to be able to receive children) And transforms it into tabs, the children of this element need to have the same role as the built-in components.


🟥 **Important** : When creating custom Tabs using the HOC please use these roles defined previously for each element on your custom tab.

## TabElements

A simple object to help you add roles on your custom tabs, it has the following properties: 
```
tabList = 'tabs',
tab = 'tab',
tabPanel = 'tab-panel',
```


[See example](https://github.com/ZakariaBenali/react-with-tabs/tree/main/examples/vite-react) for a better demonstration

[See Demo](http://react-with-tabs-demo.zakariabenali.me/)

## Todo

 - [ ] Writing tests
 - [ ] Create a more detailed documentation
 - [ ] Add a github workflow 

## License
 This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/ZakariaBenali/react-with-tabs/blob/main/LICENSE)  file for more details
