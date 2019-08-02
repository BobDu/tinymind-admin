import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import StopIcon from '@material-ui/icons/Stop';
import classnames from 'classnames';
import { translate } from 'ra-core';
import IconCancel from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Button, withDataProvider, UPDATE } from 'react-admin';

const styles = theme => ({
  deleteButton: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, 0.12),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
});

class ForceKillButton extends Component {
  state = {
    showDialog: false,
  };

  handleClick = (event) => {
    event.stopPropagation();
    this.setState({ showDialog: true });
  };

  handleCloseClick = (event) => {
    event.stopPropagation();
    this.setState({ showDialog: false });
  };

  handleKill = (event) => {
    event.stopPropagation();
    const {
      dataProvider, record,
    } = this.props;
    const payload = { id: record.id, data: { action: 'force-kill' } };
    dataProvider(UPDATE, 'executions', payload, {
      onSuccess: {
        notification: {
          body: 'Execution already force kill',
          level: 'info',
        },
        redirectTo: '/executions',
        refresh: true,
      },
      onError: {
        notification: {
          body: 'Error: Execution kill failed',
          level: 'error',
        },
      },
    });
    this.setState({ showDialog: false });
  };

  render() {
    const { showDialog } = this.state;
    const {
      label = 'Kill', classes = {}, className, record, titleSource,
    } = this.props;
    const name = titleSource? record[titleSource] : record.title ? record.title : record.name ? record.name : record.id;
    let disabled = false;
    const noActiveStatus = ['succeeded', 'killed', 'failed'];
    if (noActiveStatus.indexOf(record.status) !== -1) {
      disabled = true;
    }
    return (
      <Fragment>
        <Button
          onClick={this.handleClick}
          label={label}
          disabled={disabled}
          className={classnames('ra-delete-button', classes.deleteButton, className)}
          key="button"
        >
          <StopIcon />
        </Button>
        <Dialog fullWidth open={showDialog} onClose={this.handleCloseClick} laria-label="Are you sure?">
          <DialogTitle>
            Killing - { name }
          </DialogTitle>
          <DialogContent>
            <div>Are you sure you want to kill this entry? This action is permanent.</div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleKill}
              label={label}
              className={classnames('ra-delete-button', classes.deleteButton, className)}
              key="button"
            >
              <StopIcon />
            </Button>
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

ForceKillButton.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  basePath: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
  resource: PropTypes.string.isRequired,
  translate: PropTypes.func,
};

ForceKillButton.defaultProps = {
  redirect: 'list',
};

export default withDataProvider(withStyles(styles)(translate(ForceKillButton)));
