import React from 'react'



export default function News({news}) {
    
    return (
        <div>
            

           

                <div className="home-paragraph-sports">
                    <p>{news.title}</p> 
                </div>
                <div><img src={news.imageUrl}/> </div>
               <div>
               <h3>{news.tags}</h3>
               <bold><blockquote className="paragraph-one">{news.caption}</blockquote></bold>
              <p className="paragraph-two">{news.body}</p>
              <h1 className="paragraph-two">{news.writer}</h1>
              <p>{news.comment}</p>
              
            </div>
        </div>
    )
}
