import React from 'react';

import MainTemplate from './components/MainTemplate/MainTemplate';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const [drag, setDrag] = React.useState(true);
  const [mainLayout, setMainLayout] = React.useState({ lg: [{
    x: 0,
    y: 0,
    w: 12,
    h: 1,
    i: "0",
}, {
    x: 0,
    y: 5,
    w: 12,
    h: 1,
    i: "1", 
}] as any });
const [secLayout, setSecLayout] = React.useState({ lg: [{
    x: 0,
    y: 0,
    w: 1,
    h: 1,
    i: "3",
}, {
    x: 1,
    y: 0,
    w: 1,
    h: 1,
    i: "4", 
}] as any });

  const onDrop = (elemParams: any) => {
    alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  };

    function dragStart() {
        if (arguments[1].i === "1" || arguments[1].i === "0") {
            setDrag(true);
        }
    }

    function dragEnd() {
        setDrag(false);
    }

    const onLayoutChange = (layout: any, index: any) => {
        console.log(layout, index);
        if (index === 0) setMainLayout({lg: layout})
        if (index === 1 && layout.length) setSecLayout({lg: layout})
    }

  return (
        <MainTemplate>
        <ResponsiveReactGridLayout
            width={12}
            cols={ { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 } }
            layouts={{ lg: [{
                x: 0,
                y: 0,
                w: 12,
                h: 1,
                i: "0",
            }, {
                x: 0,
                y: 5,
                w: 12,
                h: 1,
                i: "1", 
            }] as any }}
            onLayoutChange={(layout) => onLayoutChange(layout, 0)}
            isDraggable={drag}
            onDragStart={dragStart}
            onDragStop={dragEnd}
            compactType="horizontal"
            preventCollision={false}
            measureBeforeMount={true}
        >
                <div key={0} className="text">
                    <ResponsiveReactGridLayout
                        width={12}
                        cols={ { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 } }
                        layouts={secLayout}
                        onLayoutChange={(layout) => onLayoutChange(layout, 1)}
                        compactType="horizontal"
                        preventCollision={false}
                        measureBeforeMount={true}
                    >
                        <div key={3} className="text">Interior3</div>
                        <div key={4} className="text">Interior4</div>
                    </ResponsiveReactGridLayout>
                </div>
                <div key={1} className="text">John2</div>
        </ResponsiveReactGridLayout>
    </MainTemplate>
  );
}
