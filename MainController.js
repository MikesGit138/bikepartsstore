let app = angular.module('myApp',[]);
app.controller('MainController', ['$scope', function($scope) { 
    $scope.products = [
        { 
          name: 'Metallic Rims', 
          price: 19, 
          cover: 'https://images.immediate.co.uk/production/volatile/sites/21/2019/09/Bontrager-Aeolous-pro-3V-TLR-01-fd9313a.jpg?quality=90&resize=768,574' 
        }, 
        { 
          name: 'Tubeless Bike Tire', 
          price: 8, 
          cover: 'https://surlybikes.com/uploads/parts/surly-ExtraTerrestrial-tire-26x46-TR0804-02-300x300.jpg' 
        },
        {
          name: 'Black Bike Crank',
          price: 35,
          cover: 'https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFsd2VKQXFUNkwuX0FDX1NMMTAwMV8uanBn.jpg'
        },
        {
          name: 'Red Bike Saddle',
          price: 15,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9AHJrEGEPE01olHbj7jmom0bXggmHQL9OA&usqp=CAU'
        },
        {
          name: 'Mountain Bike Rim',
          price: 32,
          cover: 'https://cdn.media.halfords.com/i/washford/244017/Quick-Release-Front-Mountain-Bike-Wheel---26-Black-Rim?fmt=auto&qlt=default&$sfcc_tile$&w=340'
        },
        {
          name: 'Blue Bike Pedal',
          price: 20,
          cover: 'https://i5.walmartimages.com/asr/8b22f958-f605-4acb-bc68-08dfb1e1a07e.8c425c851ddd6c42ab32413b9eb3bfe1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
        },
        {
          name: 'Metallic Bike Pedal',
          price: 17.5,
          cover: 'https://image.made-in-china.com/43f34j00qgVfzRsCgHcB/Good-Quality-MTB-Parts-Pedal-Bike-Pedal.jpg'
        },
        {
          name: 'Mountain Bike Tire',
          price: 10,
          cover: 'https://www.rei.com/media/2437ee19-0280-48cd-8999-bf28c62a733c'
        },
        {
          name:'Blue Bike Saddle',
          price: 14,
          cover: 'https://cdn.shopify.com/s/files/1/0232/3305/products/JMO_0879.jpg'
        },
        {
          name: 'Black Bike Saddle',
          price: 15,
          cover: 'https://www.rei.com/media/d9c2e2f3-777d-4acb-9630-019411cd8539?size=784x588'
        },
        {
          name: 'Black Bike Pedal',
          price: 16.5,
          cover: 'https://m.media-amazon.com/images/I/61zivhYOyMS._AC_SL1500_.jpg'
        },
        {
          name: 'Metallic Bike Crank',
          price: 35,
          cover: 'https://hub.chainreactioncycles.com/wp-content/uploads/2014/10/BMX.jpg'
        }

    ]
  }]);