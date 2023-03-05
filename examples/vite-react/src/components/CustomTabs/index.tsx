import { FC, HTMLAttributes } from 'react'
import { TabElements } from 'react-with-tabs'
import { CustomTabsComponent } from './CustomTabsComponent'

export const CustomTabs: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...rest}) => {
  return (
    <CustomTabsComponent>
        <div className="custom-tab-list" role={TabElements.tabList}>
            <button className="custom-tab" role={TabElements.tab}> Tab 1</button>
            <button className="custom-tab" role={TabElements.tab}> Tab 2</button>
        </div>
        <div className="custom-tab-panel" role={TabElements.tabPanel}>
            Tab Content 1 
        </div>
        <div className="custom-tab-panel" role={TabElements.tabPanel}>
            Tab Content 2
        </div>
    </CustomTabsComponent>
  )
}
