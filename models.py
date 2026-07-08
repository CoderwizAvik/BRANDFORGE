from pydantic import BaseModel
from typing import List


# ===============================
# Growth Input Model
# ===============================

class GrowthData(BaseModel):
    previous_followers: int
    current_followers: int



# ===============================
# Post Data Model
# ===============================

class PostData(BaseModel):
    title: str
    likes: int
    comments: int
    shares: int



# ===============================
# Post List Model
# ===============================

class PostList(BaseModel):
    posts: List[PostData]



# ===============================
# Engagement Prediction Model
# ===============================

class PredictionInput(BaseModel):
    likes: int
    comments: int
    shares: int
    followers: int
    posting_hour: int
    hashtags: int



# ===============================
# Strategy Model
# ===============================

class StrategyInput(BaseModel):
    engagement_rate: float
    audience_growth: float
    total_posts: int