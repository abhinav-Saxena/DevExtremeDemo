import React from "react";
import Toolbar, { Item } from 'devextreme-react/toolbar';

const productTypes = [{
    id: 1,
    text: 'AMA'
  }, {
    id: 2,
    text: 'SA5'
  }, {
    id: 3,
    text: 'Media Center'
  }, {
    id: 4,
    text: 'Command Center'
  }, {
    id: 5,
    text: 'CAW'
  }];

  const selectBoxOptions = {
    width: 140,
    items: productTypes,
    valueExpr: 'id',
    displayExpr: 'text',
    value: productTypes[0].id,
    // onValueChanged: (args) => {
    //   if (args.value > 1) {
    //     productsStore.filter('type', '=', args.value);
    //   } else {
    //     productsStore.filter(null);
    //   }
    //   productsStore.load();
    // }
  };

const Header = (): JSX.Element => {
    return (
           <div className="header">
               {/* <Toolbar>
                   <Item location='before' locateInMenu="auto" widget="dxSelectBox" 
                   options={selectBoxOptions}/>
                </Toolbar> */}
                <select>
                    <option>AMA</option>
                </select>
           </div>
    )

}
export default Header
