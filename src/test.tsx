import React from 'react';
import * as _ from 'lodash';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const MyComponent: React.FC<any> = ({ secLayout, onLayoutChange, dragStart, dragEnd }) => {
    return (
        <ResponsiveReactGridLayout
            width={12}
            cols={ { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 } }
            layouts={secLayout}
            onLayoutChange={(layout) => onLayoutChange(layout, 1)}
            compactType="horizontal"
            preventCollision={false}
            onDragStart={dragStart}
            onDragStop={dragEnd}
            measureBeforeMount={false}
        >
                                    <div key={3} className="text">Interior3</div>
                                <div key={4} className="text">Interior4</div>
        </ResponsiveReactGridLayout>
    )
  }

function areEqual(prevProps: any, nextProps: any) {
    return _.isEqual(prevProps, nextProps);
}

  export default React.memo(MyComponent, areEqual);