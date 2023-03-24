const info =[
    {  
        owner: 'Trần Ngọc Diễm',
        houseName: 'Diễm Thạnh',
        area: 'TP. Hồ Chí Minh',
        address:'KDC A, Quận B',
        room: 3,
        priceRent: 1200000,
        contactPhone: '0955585697',
    },
    { 
        owner: 'Lê Ngọc Giàu',
        houseName: 'Ngọc Giàu',
        area: 'Quảng Ninh',
        address:'KDC D, huyện N',
        room: 2,
        priceRent: 2100000,
        contactPhone: '0955585697',
    },
    { 
        owner: 'Lê Quý',
        houseName: 'Quý Hằng',
        area: 'Hải Phòng',
        address:'KDC 6, huyện L',
        room: 5,
        priceRent: 900000,
        contactPhone: '0955585697',
    },
    { 
        owner: 'Phan Hoài Bảo',
        houseName: 'Hoài Bảo',
        area: 'Hà Nội',
        address:'KDC 8, huyện R',
        room: 1,
        priceRent: 1300000 ,
        contactPhone: '0955585697',
    },
    { 
        owner: 'Nguyễn Ngọc',
        houseName: 'Nguyễn Ngọc',
        area: 'Nghệ An',
        address:'KDC X, huyện R',
        room: 2,
        priceRent: 1100000 ,
        contactPhone: '0955585697',
    },
    { 
        owner: 'Nguyễn Tuấn',
        houseName: 'Tuấn Tú',
        area: 'Hải Phòng',
        address:'Hẻm A, Huyện P',
        room: 0,
        priceRent:800000,
        contactPhone:'0955585697',
    },
    {  
        owner: 'Quách Mạnh Hùng',
        houseName: 'Mạnh Hùng',
        area: 'TP. Hồ Chí Minh',
        address:'Hẻm Liên Tổ X, huyện N',
        room: 0 ,
        priceRent:3000000,
        contactPhone:'0955585697',
    },
    {  
        owner: 'Nguyễn Ngọc Tuân',
        houseName: 'Ngọc Tuân',
        area: 'Quảng Ninh',
        address:'KDC A, huyện B',
        room: 6,
        priceRent:1500000,
        contactPhone:'0955585697',
    },
    
    
];
/*
    {  
        owner: '',
        houseName: '',
        area: '',
        address:'',
        room: ,
        priceRent: ,
        contactPhone: ,
        id: ,
    },
*/ 
for(i=0;i<info.length;i++){
    document.getElementsByClassName('owner')[i].innerHTML = info[i].owner;
    document.getElementsByClassName('houseName')[i].innerHTML = info[i].houseName;
    document.getElementsByClassName('area')[i].innerHTML = info[i].area;
    document.getElementsByClassName('address')[i].innerHTML = info[i].address;
    document.getElementsByClassName('room-left')[i].innerHTML = info[i].room;
    document.getElementsByClassName('price')[i].innerHTML = info[i].priceRent;
    document.getElementsByClassName('contact')[i].innerHTML = info[i].contactPhone;
    document.getElementsByClassName('price')[i].style.color = 'yellow';
    document.getElementsByClassName('contact')[i].style.color = 'pink';
    if(info[i].room===0)
    document.getElementsByClassName("room-left")[i].style.color="red"
    else document.getElementsByClassName("room-left")[i].style.color="greenyellow";
}
for(i=0;i<document.getElementsByClassName("highlight").length;i++){
    if(document.getElementsByClassName('owner')[i].innerHTML.length==0){
        document.getElementsByClassName('highlight')[i].style.display='none';
    }
}
