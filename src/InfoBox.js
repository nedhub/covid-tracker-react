import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";

// EMEMANKA CHINEDU
// COVID PROJECT

function InfoBox({ title, cases, total}) {
    return (
        <Card className="infoBox">

            <CardContent>

                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>


                <h2 className="infoBox__cases">{cases}</h2>

                {/* Title */}

                {/* Number of Cases */}

                <Typography className="infoBox__total" color="textSecondary">
                    {total}
                </Typography>


                {/* Total  */}






            </CardContent>
            
        </Card>
    )
}

export default InfoBox
