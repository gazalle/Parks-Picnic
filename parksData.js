db.parks.insert([
    {
        name:"Volks Park",
        distance:3,
        groups:[{
            name:"Cool Group",
            items:[{name:"book"}, {name:"grill"}, {name:"drinks"}],
            isAvailable: true,
            members:[
                {
                name:"gazelle",
                items:"book"
                 },
                 {
                    name:"ela",
                    items:"grill"
                }
                
                ]
        },
        {
            name:"Nice Group",
            items:[{name:"book"}, {name:"tea"}, {name:"sweets"}],
            isAvailable: true,
            members:[
                {
                name:"omid",
                items:"book"
                 },
                 {
                    name:"mike",
                    items:"sweets"
                }
                
                ]
        }

    ]
    },
    {
        name:"State Park",
        distance:4,
        groups:[{
            name:"Cool Group",
            items:[{name:"book"}, {name:"grill"}, {name:"drinks"}],
            isAvailable: true,
            members:[
                {
                name:"sara",
                items:"book"
                 }
                ]
        }

    ]
    },
    {
        name:"City Park",
        distance:3,
        groups:[{
            name:"Game Group",
            items:[{name:"gameboards"}, {name:"drink"}, {name:"snack"}],
            isAvailable: true,
            members:[
                {
                name:"jeff",
                items:"snack"
                 }
                ]
        }

    ]
    }
])