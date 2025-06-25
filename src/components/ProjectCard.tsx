import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProjectCard;