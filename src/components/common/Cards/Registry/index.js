import React, {Component, Fragment} from 'react';import Card from '@material-ui/core/Card';import CardHeader from '@material-ui/core/CardHeader';import CardContent from '@material-ui/core/CardContent';import IconButton from '@material-ui/core/IconButton';import ExpandMore from '@material-ui/icons/ExpandMore';import ExpandLess from '@material-ui/icons/ExpandLess';import Avatar from '@material-ui/core/Avatar';import {convertDate} from "../../../../utils/date";class Registry extends Component {    constructor(props) {        super(props);        this.state = {            additionalIsActive: false,        };    }    toggleAdditional = () => {        this.setState({additionalIsActive: !this.state.additionalIsActive});    };    render() {        const {date, user, updater, systemText} = this.props.data;        const {additionalIsActive} = this.state;        const expandBtnView = additionalIsActive ?            (<ExpandLess onClick={this.toggleAdditional}/>)            :            (<ExpandMore onClick={this.toggleAdditional}/>            );        let avatarView;        if (user.avatarUrl) {            avatarView = (                <a href={`/history/user/${user.id}/`}>                    <Avatar                        className={''}                        alt={`${user.firstName} ${user.lastName}`}                        src={user.avatarUrl}                    />                </a>            );        } else if (user.firstName && user.lastName) {            avatarView = (                <a href={`/history/user/${user.id}/`}>                    <Avatar className={''} alt={`${user.firstName} ${user.lastName}`}>                        {`${user.firstName[0]} ${user.lastName[0]}`}                    </Avatar>                </a>            );        }        return (            <Card className={''}>                <CardHeader                    avatar={(<a href={`/history/user/${updater.id}/`}>                        <Avatar                            className={''}                            alt={`${updater.firstName} ${updater.lastName}`}                            src={updater.avatarUrl}                        />                    </a>)}                    title={`${updater.firstName} ${updater.lastName}`}                    subheader={convertDate(date)}                    action={                        <Fragment>                            <IconButton>                                {expandBtnView}                            </IconButton>                        </Fragment>                    }                />                <CardContent>                    <p dangerouslySetInnerHTML={{__html: `${systemText},`}}/>                    <p>                        собственник {avatarView} {`${user.firstName} ${user.lastName}`}, адреса нет                    </p>                    {additionalIsActive && (                        <Fragment>                            <p>Комментарий:</p>                            <p>нет данных</p>                        </Fragment>                    )}                </CardContent>            </Card>        );    }}export default Registry;