var app = angular.module("myapp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/sanpham", {
        templateUrl: "s1.html"
     
    })
    .when("/quan", {
        templateUrl: "quan.html"
        
    })
    .when("/aokhoac", {
        templateUrl: "aokhoac.html"
        
    })
    .otherwise({
        redirectTo: "/sanpham"
    })
});

app.run(function ($rootScope){
$rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
});
$rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
});
$rootScope.$on("$routeChangeError", function(){
    $rootScope.loading = false;
    alert("loi, khong tai dc temlate");
});

});
// var app = angular.module("myapp", []);
app.controller("myctrl", function($scope){
    $scope.carts = [];
    $scope.short =[
        {
            id: 1,
            name: "quần 1",
            image: "img/q1.webp",
            price: 300000,
        },
        {
            id: 2,
            name: "quần 1",
            image: "img/q2.webp",
            price: 200000,
        },
        {
            id: 3,
            name: "quần 1",
            image: "img/q3.webp",
            price: 500000,
        },
        {
            id: 4,
            name: "quần 1",
            image: "img/q4.webp",
            price: 200000,
        },
        {
            id: 5,
            name: "quần 1",
            image: "img/q5.webp",
            price: 600000,
        },
        {
            id: 6,
            name: "quần 1",
            image: "img/q6.webp",
            price: 200000,
        },
        {
            id: 7,
            name: "Quần đùi ",
            image: "img/18.jfif",
            price: 770000,
            
        },
        {
            id: 8,
            name: "Quần ",
            image: "img/new6.webp",
            price: 150000,
            
        },
    ]
    $scope.jacket =[
        {
            id: 1,
            name: "Áo Cổ ngắn ",
            image: "img/15.jfif",
            price: 440000,
            
        },
        {
            id: 2,
            name: "Áo Cổ ngắn ",
            image: "img/16.jfif",
            price: 550000,
            
        },
        {
            id: 3,
            name: "Áo Khoác ",
            image: "img/17.jfif",
            price: 660000,
            
        },
        {
            id: 4,
            name: "Aó khoác ",
            image: "img/bes1.webp",
            price: 250000,
            
        },
        {
            id: 5,
            name: "Aó khoác2 ",
            image: "img/bes2.webp",
            price: 150000,
            
        },
        {
            id: 6,
            name: "Aó khoác 1 ",
            image: "img/bes5.webp",
            price: 350000,
            
        },
        {
            id: 7,
            name: "Aó khoác 2 ",
            image: "img/bes6.webp",
            price: 250000,
            
        },
        {
            id: 8,
            name: "Aó khoác đen 1 ",
            image: "img/bes7.webp",
            price: 450000,
            
        },
        {
            id: 9,
            name: "Aó khoác đen 2 ",
            image: "img/bes8.webp",
            price: 550000,
            
        },
    ]
    $scope.products = [
    
        {
            id: 1,
            name: "Áo Cổ Tròn Dài Tay",
            image: "img/3.jfif",
            price: 200000,
        },
        { id: 2,
            name: "Áo Cổ ngắn thỏ",
            image: "img/4.jfif",
            price: 300000,
        },
        {
            id: 3,
            name: "Áo Cổ Tròn vàng",
            image: "img/5.jfif",
            price: 400000,
            
        },
        {
            id: 4,
            name: "Áo Cổ Tròn  thỏ ",
            image: "img/6.jfif",
            price: 500000,
            
        },
        {
            id: 5,
            name: "Áo Cổ Tròn   thỏ",
            image: "img/7.jfif",
            price: 600000,
            
        },
        {
            id: 6,
            name: "Áo Cổ ngắn ",
            image: "img/1.webp",
            price: 700000,
            
        },
        {
            id: 7,
            name: "Áo Cổ ngắn ",
            image: "img/8.jfif",
            price: 800000,
            
        },
        {
            id: 8,
            name: "Áo Cổ ngắn ",
            image: "img/9.jfif",
            price: 900000,
            
        },
        {
            id: 9,
            name: "Áo Cổ ngắn ",
            image: "img/10.jfif",
            price: 1000000,
            
        },
        {
            id: 10,
            name: "Áo Cổ ngắn ",
            image: "img/11.jfif",
            price: 100000,
            
        },
        {
            id: 11,
            name: "Áo Cổ ngắn ",
            image: "img/12.jfif",
            price: 110000,
            
        },
        { id: 12,
            name: "Áo Cổ ngắn ",
            image: "img/13.jfif",
            price: 220000,
            
        },
        {
            id: 13,
            name: "Áo Cổ ngắn ",
            image: "img/14.jfif",
            price: 330000,
            
        },
        {
            id: 14,
            name: "Áo Cổ ngắn ",
            image: "img/15.jfif",
            price: 440000,
            
        },
        {
            id: 15,
            name: "Áo Cổ ngắn ",
            image: "img/16.jfif",
            price: 550000,
            
        },
        {
            id: 16,
            name: "Áo Khoác ",
            image: "img/17.jfif",
            price: 660000,
            
        },
        {
            id: 17,
            name: "Quần đùi ",
            image: "img/18.jfif",
            price: 770000,
            
        },
        {
            id: 18,
            name: "Áo Cổ ngắn ",
            image: "img/2.webp",
            price: 880000,
            
        },
        {
            id: 19,
            name: "Áo sơ mi ",
            image: "img/new1.webp",
            price: 990000,
            
        },
        {
            id: 20,
            name: "Áo gile ",
            image: "img/new2.webp",
            price: 350000,
            
        },
        {
            id: 21,
            name: "Áo gile2 ",
            image: "img/new3.webp",
            price: 450000,
            
        },
        {
            id: 22,
            name: "Áo sơ mi 1 ",
            image: "img/new4.webp",
            price: 350000,
            
        },
        {
            id: 23,
            name: "Áo sơ mi 2 ",
            image: "img/new5.webp",
            price: 250000,
            
        },
        {
            id: 24,
            name: "Quần ",
            image: "img/new6.webp",
            price: 150000,
            
        },
        {
            id: 25,
            name: "Aó khoác ",
            image: "img/bes1.webp",
            price: 150000,
            
        },
        {
            id: 26,
            name: "Aó khoác2 ",
            image: "img/bes2.webp",
            price: 150000,
            
        },
        {
            id: 27,
            name: "Aó thun đen ",
            image: "img/bes3.webp",
            price: 150000,
            
        },
        {
            id: 28,
            name: "Aó thun đen2 ",
            image: "img/bes4.webp",
            price: 150000,
            
        },
        {
            id: 29,
            name: "Aó khoác 1 ",
            image: "img/bes5.webp",
            price: 150000,
            
        },
        {
            id: 30,
            name: "Aó khoác 2 ",
            image: "img/bes6.webp",
            price: 150000,
            
        },
        {
            id: 31,
            name: "Aó khoác đen 1 ",
            image: "img/bes7.webp",
            price: 150000,
            
        },
        {
            id: 32,
            name: "Aó khoác đen 2 ",
            image: "img/bes8.webp",
            price: 150000,
            
        },
        {
            id: 33,
            name: "quần 1",
            image: "img/q1.webp",
            price: 300000,
        },
        {
            id: 34,
            name: "quần 1",
            image: "img/q2.webp",
            price: 200000,
        },
        {
            id: 35,
            name: "quần 1",
            image: "img/q3.webp",
            price: 500000,
        },
        {
            id: 36,
            name: "quần 1",
            image: "img/q4.webp",
            price: 200000,
        },
        {
            id: 37,
            name: "quần 1",
            image: "img/q5.webp",
            price: 600000,
        },
        {
            id: 38,
            name: "quần 1",
            image: "img/q6.webp",
            price: 200000,
        },
 
    
    
];

$scope.add_cart = function(sp , sh, jk){
    if(sp){
        $scope.carts.push({id: sp.id, image: sp.image, name: sp.name, price: sp.price});
    }
    if(sh){
        $scope.carts.push({id: sh.id, image: sh.image, name: sh.name, price: sh.price});
    }	
    if(jk){
        $scope.carts.push({id: jk.id, image: jk.image, name: jk.name, price: jk.price});
    }

}
        
    
$scope.total = 0;

$scope.setTotals = function(cart){
    if(cart){
        $scope.total += cart.price;
    }
}

$scope.remove_cart = function(cart){
    if(cart){
        $scope.carts.splice($scope.carts.indexOf(cart), 1);
        $scope.total -= cart.price;
    }
}
$scope.batdau = 0;
       
        
        $scope.chuyentrang = function(trang){
            $scope.batdau = (trang-1)*12;
        }
        $scope.sotrang = function(){
            var sotrang = Math.ceil($scope.products.length / 12);
            var mang = [];
            for(let i=1;i<=sotrang;i++){
mang.push(i);
            }
            return mang;
        }
    
});

    




