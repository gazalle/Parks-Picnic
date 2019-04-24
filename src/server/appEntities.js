export const appEntities = {
    parks:[{
        id:"P1",
        name:"Volks Park",       
        groups:[`G2`],
        distance: "3km"
    },{
        id:"P2",
        name:"Mauer Park",
        groups:[`G1`],
        distance:"3km"
    },
    {
        id:"P3",
        name:"Tiergarten Park",
        groups:[`G3`],
        distance:"4km"
    }],
    picnic_groups:[{
        name:"Group 1",
        id:"G1",
        park:"P2",
        slots: "limited to 10",
        isAvailable: false
        
    },{
        name:"Group 1",
        id:"G2",
        park:"P1",
        slots: "unlimited",
        isAvailable: true
    },{
        name:"Group 1",
        id:"G3",
        park:"P3",
        slots: "limited to 10",
        isAvailable: false
    }
    ],
    items:[{
        name:"Fruites",
        id:"T1",
        groups:"G1"
   
        
    },{
        name:"Food",
        id:"T2",
        groups:"G1"
       
        
    },{
        name:"Drinks",
        id:"T3",
        groups:"G2"
       
        
    },{
        name:"Grill",
        id:"T4",
        groups:"G2"
       
    },{
        name:"Ball",
        id:"T5",
        groups:"G3"
       
    }]
};