from models import GrowthData, PostList


# ===============================
# Audience Growth Calculation
# ===============================

def calculate_growth(data: GrowthData):

    if data.previous_followers == 0:
        return {
            "audience_growth": 0,
            "status": "No Data",
            "suggestion": "Previous follower data is missing."
        }


    growth = (
        (data.current_followers - data.previous_followers)
        / data.previous_followers
    ) * 100


    if growth >= 10:
        status = "Excellent Growth"
        suggestion = "Keep posting consistently."

    elif growth >= 5:
        status = "Good Growth"
        suggestion = "Increase posting frequency."

    elif growth >= 0:
        status = "Slow Growth"
        suggestion = "Improve content quality."

    else:
        status = "Audience Decreasing"
        suggestion = "Change your content strategy."


    return {
        "audience_growth": round(growth, 2),
        "status": status,
        "suggestion": suggestion
    }



# ===============================
# Find Best Post
# ===============================

def best_post(post_list: PostList):

    if len(post_list.posts) == 0:
        return {
            "message": "No posts available"
        }


    best = post_list.posts[0]
    highest = (
        best.likes +
        best.comments +
        best.shares
    )


    for post in post_list.posts[1:]:

        score = (
            post.likes +
            post.comments +
            post.shares
        )


        if score > highest:
            highest = score
            best = post



    return {
        "title": best.title,
        "likes": best.likes,
        "comments": best.comments,
        "shares": best.shares,
        "engagement": highest
    }