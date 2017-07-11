import React from 'react';
var searchresults;
class Search extends React.Component
{
        searchByTags = () => {
        var selectedTags = String($("#selectTags").val());
        var selectedTagsArray = selectedTags.split(",");
        var urlToGetQsnsByTags = "/api/questions/"+selectedTagsArray.join("/");
        $.ajax({url: urlToGetQsnsByTags, 
                type: "GET",
                async:false,
                success: function(response){
              searchresults = response;
                }
        });
        return "hello";
    }
    render()
    {
        return(
        "Hello"
        )
    }
}

export default Search