import { Component, OnInit } from '@angular/core';
// import postDetails from '../posts.json'; 

interface Post {
  id: number;
  title: String;  
  article: String;
  genre: String;
}

type NullableArticle = Post | null;

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit{

  posts: Post[] = [
    {  
      "id": 1,
      "title": "What is the lorem ipsum?", 
      "article": "Have you ever read a webpage or document that used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content. Many software programs and applications have made it their default dummy text. Since the lorem ipsum is always used as a placeholder text, its use indicates that this is not a final version of a document, thus helping to avoid unnecessary printing.", 
      "genre": "tech"  
    },
    {  
      "id": 2,
      "title": "Where does it come from?",  
      "article": "The lorem ipsum is based on De finibus bonorum et malorum, a Latin text written by Cicero in 45 BC. Typographers and printers have used passages from this work for formatting since the 16th century. Many words have been added or modified over the centuries. As a result, the lorem ipsum is no longer considered Latin, even though it looks a lot like it. The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.'",  
      "genre": "tech"    
    },  
    {  
      "id": 3,
      "title": "How is it Generated?",  
      "article": "A wide range of online generators can be used to create the lorem ipsum with a single click. Here’s one to try out for your next project: https://loremipsum.io/. There’s a generator for the classic lorem ipsum, as well as for more humorous placeholder texts: hipster ipsum, zombie ipsum, pokeipsum and many more! Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph:", 
      "genre": "business"   
    },  
    {  
      "id": 4,
      "title": "Lorem Ipsum",  
      "article": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
      "genre": "economics"   
    }
  ];

  selectedPost: NullableArticle = null;

  selectPost(post: Post) {
    this.selectedPost = post;
  }

  ngOnInit(): void {
    
  }

}