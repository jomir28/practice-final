import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/useMenu';
import OrderTabs from './OrderTabs';

const OrderCategory = () => {

    const [menu]=useMenu()
    const dessert = menu.filter(item=> item.category === "dessert")
    const pizza = menu.filter(item=> item.category === "pizza")
    const salad = menu.filter(item=> item.category === "salad")
    const soup = menu.filter(item=> item.category === "soup")
    const drinks = menu.filter(item=> item.category === "drinks")

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='my-12'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel><OrderTabs items={salad}></OrderTabs></TabPanel>
                <TabPanel><OrderTabs items={pizza}></OrderTabs></TabPanel>
                <TabPanel><OrderTabs items={soup}></OrderTabs></TabPanel>
                <TabPanel><OrderTabs items={dessert}></OrderTabs></TabPanel>
                <TabPanel><OrderTabs items={drinks}></OrderTabs></TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderCategory;