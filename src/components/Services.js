import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"


export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Et laboris amet tempor commodo est reprehenderit ex cillum magnaEt laboris amet tempor commodo est reprehenderit ex cillum magna..'

            }
            , {
                icon: <FaHiking />,
                title: "free hiking",
                info: 'Et laboris amet tempor commodo est reprehenderit ex cillum magnaEt laboris amet tempor commodo est reprehenderit ex cillum magna..'

            }, {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Et laboris amet tempor commodo est reprehenderit ex cillum magnaEt laboris amet tempor commodo est reprehenderit ex cillum magna..'

            }, {
                icon: <FaBeer />,
                title: "Strong beer",
                info: 'Et laboris amet tempor commodo est reprehenderit ex cillum magnaEt laboris amet tempor commodo est reprehenderit ex cillum magna..'

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span >{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    }
                    )}
                </div>
            </section>



        )
    }
}
