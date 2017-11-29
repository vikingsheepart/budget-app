import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');

  return (
    <div>
      <p>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

ExpensesSummary.propTypes = {
  expensesCount: PropTypes.number.isRequired,
  expensesTotal: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(ExpensesSummary);
