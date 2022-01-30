const categories = {
    id: 'categories',
    title: 'Categories',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'vehicles',
            title: 'Vehicles',
            type: 'collapse',
            children: [
                {
                    id: 'vehicle-car',
                    title: 'Car',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'vehicle-can',
                    title: 'Van',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'icons',
            title: 'Properties',
            type: 'collapse',
            children: [
                {
                    id: 'properties-house',
                    title: 'House',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'properties-apartments',
                    title: 'Apartments',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default categories;
