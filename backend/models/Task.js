import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	description: { type: String },
	completed: { type: Boolean, default: false },
	deadline: { type: Date },
});
const Task = mongoose.model('Task', taskSchema);

export default Task;
