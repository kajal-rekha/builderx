import Builder from "@/models/Builder";

// ======= Create Builder ======= //
export const createBuilder = async (req, res) => {
    try {
        const { user_id, components, projectName } = req.body;

        const builder = await Builder.create({
            user_id,
            components,
            projectName,
        });

        res.status(201).json({ builder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Get All Builders  ======= //
export const getBuilders = async (req, res) => {
    try {
        const builders = await Builder.find({});
        res.status(200).json({ builders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Get A Builder ======= //
export const getBuilder = async (req, res) => {
    try {
        const builder = await Builder.findOne({});
        if (!builder) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json(builder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Update Builder  ======= //
export const updateBuilder = async (req, res) => {
    try {
        const userId = req.user_id;
        const { projectId } = req.query;

        const updated = await Builder.findOneAndUpdate(
            { projectId, userId },
            req.body,
            { new: true }
        );

        if (!updated) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json({
            message: "Project updated successfully",
            updated,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Delete Builder ======= //
export const deleteBuilder = async (req, res) => {
    try {
        const userId = req.user_id;
        const { projectId } = req.query;

        const deleted = await Builder.findOneAndDelete({
            projectId,
            userId,
        });

        if (!deleted) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json({
            message: "Project deleted successfully",
            deleted,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
