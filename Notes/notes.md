# Overview
We will be displaying the rewards in each category
on a RewardBoard. 

RewardBoard will be a rectangular grid with columns corresponding to categories. Each row in the 
of the grid will correspond to a reward.

To assign a reward R to a category C, we drag the reward icon from the leftmost column of the grid, move it horizontally
in its 'swim lane' and let go of it in a column referring to the category C.

A category can have multiple rewards assigned to it. To find out all the rewards that have been assigned
to category C, scan from top to bottom the column referring to category C.

# Tech Stack
We will build the RewardBoard using React dnd 

    https://react-dnd.github.io/react-dnd/about
 
React dnd terminology will be used in subsequent portions of this note.

# Reward Board
Reward Board has multiple swim lanes. Each reward has an associated swim lane. 

## Swim Lanes
Each swim lane has the following info

    {
        rewardId: reward_item_source_id
        parentCategories: [category_drop_targets]
    }
    
nn

    




   
    
