import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './info.module.css'

const Info = () => {
    return (
        <div className={classes.info_text}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><div className={classes.acc_header}>ДОСТАВКА</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className={classes.acc_text}>Отправка обычно осуществляется каждую пятницу.(Вещи которые в наличии).Трек присылают вам на почту компания CDEK в течении дня с заказа товара. Даты отправки посылки пишутся в карточке товара.Если товар был РЕСТОКНУТ или открыт ПРЕДЗАКАЗ значит он будет готов в течении 1-4 недель и сразу отправлен вам.
                        ВСЕ посылки отправляем CDEK отслеживать тут https://www.cdek.ru/ru</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><div className={classes.acc_header}>Возврат</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className={classes.acc_text}>Вы можете вернуть вещь в случае брака, если прислали другую вещь, в этом случае производится доставка за счёт магазина или же возврат средств, обычно этот процесс занимает (1-15 раб дней)</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                <Typography><div className={classes.acc_header}>Контакты</div></Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className={classes.acc_text}>https://vk.com/automaticvertical <br/><br/>

                        https://t.me/Automaticverticalclo <br/><br/>

                        ИП Вельминский В.А. <br/>
                        ИНН: 667105554155</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Info
