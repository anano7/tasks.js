
// წარმოიდგინე რომ არ არსებობს String კონსტრუქტორი , 

// მასივის დახმარებით შექმენით MyString კლასი , რომელსაც ექნება ტექსტის ზომის
// დაბრუნების ფუნქციონალი , ექნება concat მეთოდი რომელსაც გადაეცემა ტექსტი და აბრუნებს
// გადაცემული ტექსტის და საწყისი სტრინგის გაერთიანების ახალ სტრინგს . 

// ასევე ექნება მეთოდი elementAt(index) რომელიც გადაცემული ინდექსით დააბრუნებს შესაბამის ქარაქტერს 

// და ექნება მეთოდი subText(startingIndex) რომელიც დააბრუნებს საბსტრინგს გადაცემული ინდექსიდან ბოლომდე

class MyString  
{

constructor (txt) 
{ 
   this.txt=txt ; 
   let count1 = 0  ;
   let Count2=0;
   let length =0 ;
   let arr = [] ; 
   let concat = []; 
   let empty = [] ;
  

   this.getLength = function ()
   {
      while(true)
    {    
         if (txt[count1] == undefined)  return length ; 
         arr.push(txt[count1]) ; 
         count1 ++ ;
         length ++ ;
    }      
      
   } 

   this.concat = function (newt) 
   {
       
    this.newt=newt; 
    this.getLength() ; 
    concat= arr; 
        while (true) 
        {
            if (newt[Count2] == undefined)  return concat.join('') ; 
            concat.push(newt[Count2]) ;
            Count2++; 
        }
   }


 this.elementAt = function (x) 
 {
   this.x=x ; 
   this.getLength() ; 
   return arr[x]; 

 }


 this.subText =  function (y) 
 {

  this.y= y;
  this.getLength(); 
  while (true) 
             {
     if (arr[y]== undefined) return empty.join('') ; 
     empty.push(arr[y]);
     y++; 
  }
   
 }

}
};
  let first = new MyString ('This is my') ;
  let rss = first.getLength();
  let rss2 = first.concat('string class')
  let rss3 = first.elementAt(2); 
  let rss4 = first.subText(11)
  console.log('length :' + rss); 
  console.log('concat :' + rss2);
  console.log('index :' + rss3); 
  console.log('last pr:' + rss4); 