from models import StrategyInput


# ===============================
# BrandForge AI Color Theme
# ===============================

THEME = {

    "background": "#0A2647",

    "card": "#144272",

    "primary": "#205295",

    "highlight": "#2C74B3"

}



# ===============================
# AI Content Strategy Generator
# ===============================

def generate_strategy(data: StrategyInput):


    # ===============================
    # Engagement Analysis
    # ===============================


    if data.engagement_rate >= 10:


        engagement_level = "High"


        strategy = (

            "Maintain current content quality "

            "and increase audience interaction."

        )


        frequency = "4-5 Posts per Week"



    elif data.engagement_rate >= 5:


        engagement_level = "Medium"


        strategy = (

            "Improve captions, visuals "

            "and content quality."

        )


        frequency = "3-4 Posts per Week"



    else:


        engagement_level = "Low"


        strategy = (

            "Create more reels, videos "

            "and carousel content."

        )


        frequency = "Daily Posts"





    # ===============================
    # Growth Analysis
    # ===============================


    if data.audience_growth >= 10:


        growth_status = "Excellent"



    elif data.audience_growth >= 5:


        growth_status = "Good"



    elif data.audience_growth >= 0:


        growth_status = "Slow"



    else:


        growth_status = "Decreasing"





    # ===============================
    # Final AI Strategy Output
    # ===============================


    return {


        "engagement_level":

        engagement_level,


        "audience_growth":

        growth_status,


        "posting_frequency":

        frequency,


        "best_platform":

        "LinkedIn & Instagram",


        "best_content":

        "Educational + Reels + Carousel",


        "best_time":

        "7:00 PM",


        "strategy":

        strategy,


        "next_action":

        "Publish one educational AI post tomorrow.",


        "theme":

        THEME

    }