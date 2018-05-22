import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RcTreeSelect,{TreeNode,SHOW_ALL, SHOW_PARENT, SHOW_CHILD} from 'rc-tree-select';
import classNames from 'classnames';
const propTypes = {};
const defaultProps =   {
    prefixCls: 'u-tree-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
    notFoundContent:"无匹配结果"
  };;

class TreeSelect extends Component {
    static TreeNode = TreeNode;
    static SHOW_ALL = SHOW_ALL;
    static SHOW_PARENT = SHOW_PARENT;
    static SHOW_CHILD = SHOW_CHILD;


    render(){
        const {
        prefixCls,
        className,
        size,
        notFoundContent,
        dropdownStyle,
        dropdownClassName,
        ...restProps,
        } = this.props;
        const cls = classNames({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
        }, className);
        return( <RcTreeSelect
                    {...restProps}
                    dropdownClassName={classNames(dropdownClassName, `${prefixCls}-tree-dropdown`)}
                    prefixCls={prefixCls}
                    className={cls}
                    dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
                    notFoundContent={notFoundContent }
                /> )
    }

};
TreeSelect.propTypes = propTypes;
TreeSelect.defaultProps = defaultProps;
export default TreeSelect;