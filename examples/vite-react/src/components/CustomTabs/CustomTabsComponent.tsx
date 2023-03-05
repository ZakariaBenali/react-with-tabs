import { FC, HTMLAttributes } from 'react'
import { withTabs } from 'react-with-tabs'

const Component: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest}) => {
  return (
    <div className="custom-tabs" {...rest}>
        {children}
    </div>
  )
}


export const CustomTabsComponent = withTabs(Component);