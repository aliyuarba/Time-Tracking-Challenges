const array = [
  [ // work
    [5, 7],
    [32, 36],
    [103, 128],
  ],
  [ // play
    [1, 2],
    [10, 8],
    [23, 29],
  ],
  [ // study
    [0, 1],
    [4, 7],
    [13, 19],
  ],
  [ // excercise
    [1, 1],
    [4, 5],
    [11, 18],
  ],
  [ // social
    [1, 3],
    [5, 10],
    [21, 23],
  ],
  [ // selfcare
    [0, 1],
    [2, 2],
    [7, 11],
  ],
];

for (let i = 0; i<6; i++){
  $(`.current`).eq(i).html(array[i][0][0]);
  $(`.last`).eq(i).html(array[i][0][1]);
}

$(".tile ul li").click(function(){
  if($(this).hasClass("active")==false){
    $(this).toggleClass("active");
  }
  if ($(this).siblings().hasClass("active")){
    $(this).siblings().removeClass("active");
  }
  let index = $(this).index();
  for (let i = 0; i<6; i++){
    $(`.current`).eq(i).html(array[i][index][0]);
    $(`.last`).eq(i).html(array[i][index][1]);
  }
});
