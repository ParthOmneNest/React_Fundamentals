import { FeatureCard } from "../FeatureCard"
export const FeaturesSection =()=>{
    const features=[
        { 
            id:1,
            description:'Learn React at the palm of your hands'
        },
        {
            id:2, 
            description:'Designing layouts that can adapt to small screens as well. '
        },
        {
            id:3, 
            description:'Break complex UIs into small reusable components'
        }
    ]
    return(
        <div>
            {features.map((feature)=>(
                <FeatureCard
                    key={feature.id}
                    description={feature.description}
                />
            ))}
        </div>
    )
}